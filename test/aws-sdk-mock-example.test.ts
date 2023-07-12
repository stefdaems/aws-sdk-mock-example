import AWSMock from 'aws-sdk-mock';
import AWS from 'aws-sdk';

const successMessage = "PUT object executed";
describe("aws-sdk-mock project testing", () => {
  beforeAll(async() => {
    AWSMock.setSDKInstance(AWS);
    AWSMock.mock('S3', 'putObject', (params: any, callback: Function) => {
      console.log('S3', 'putObject', 'mock called');
      callback(null, successMessage);
    });
  });

  it("should mock putObject into s3", async() => {
    const { handler } = require("../lib/infrastructure/lambda/myLambda");
    const result = await handler(`Test.txt`);
    expect(result).toBe(successMessage)
  })
})
