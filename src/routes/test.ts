import express from 'express'
import testRepository from "../repository/test";

export const testRouter = express.Router()


testRouter.get("/tests", async (req, res, next) => {
  try {
    const tests = await testRepository.getAllTest();
    res.json({ tests });
  } catch (error) {
    next(error);
  }
});


testRouter.get("/patients/:id/tests", async (req, res, next) => {
  try {
    const test = await testRepository.getTestBypatientId(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "Test report not found" });
    }
    res.json({ test });
  } catch (error) {
    next(error);
  }
});


testRouter.post("/tests", async (req, res, next) => {
  try {
    const test = await testRepository.createTest(req.body);
    res.status(201).json({ test });
  } catch (error) {
    next(error);
  }
});


testRouter.patch("/tests/:id", async (req, res, next) => {
  try {
    const test = await testRepository.updateTest(req.params.id, req.body);
    if (!test) {
      return res.status(404).json({ message: "Test report not found" });
    }
    res.json({ test });
  } catch (error) {
    next(error);
  }
});


testRouter.delete("/tests/:id", async (req, res, next) => {
  try {
    const test = await testRepository.deleteTest(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "Test report not found" });
    }
    res.json({ message: "Test report deleted successfully" });
  } catch (error) {
    next(error);
  }
});