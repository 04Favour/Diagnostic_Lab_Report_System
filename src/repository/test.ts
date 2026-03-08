import Test, { ITest } from "../model/tests";



class TestRepository {
  async getAllTest(): Promise<ITest[]> {
    return await Test.find().sort({ createdAt: -1 });
  }

  async getTestBypatientId(patientId: string): Promise<ITest[] | null> {
    return await Test.find({ patientId }).sort({ createdAt: -1 });
  }

  async createTest(testData: Partial<ITest>): Promise<ITest> {
    const test = new Test(testData);
    await test.save();
    return test;
  }

  async updateTest(
    id: string,
    testData: Partial<ITest>,
  ): Promise<ITest | null> {
    return await Test.findByIdAndUpdate(id, testData, {
      new: true,
      runValidators: true,
    });
  }

  async deleteTest(id: string): Promise<ITest | null> {
    return await Test.findByIdAndDelete(id);
  }
}

export default new TestRepository();
