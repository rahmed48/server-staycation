const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { upload, uploadMultiple } = require("../middlewares/multer");


router.get("/signin", adminController.viewSignin);
router.get("/dashboard", adminController.viewDashboard);

// ENDPOINT CATEGORY
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

// ENDPOINT BANK
router.post("/bank", upload, adminController.addBank);
router.delete("/bank/:id", adminController.deleteBank);
router.put("/bank", upload, adminController.editBank);
router.get("/bank", adminController.viewBank);

// ENDPOINT ITEM
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id", uploadMultiple, adminController.editItem);
router.delete("/item/:id/delete", adminController.deleteItem);

//ENDPOINT DETAIL ITEM
router.get("/item/show-detail-item/:itemId", adminController.viewDetailItem);

router.post("/item/add/feature", upload, adminController.addFeature);
router.put("/item/update/feature", upload, adminController.editFeature);
router.delete("/item/:itemId/feature/:id", adminController.deleteFeature);

router.post("/item/add/activity", upload, adminController.addActivity);
router.put("/item/update/activity", upload, adminController.editActivity);
router.delete("/item/:itemId/activity/:id", adminController.deleteActivity);
// ENDPOINT ITEM
router.get("/booking", adminController.viewBooking);

module.exports = router;
