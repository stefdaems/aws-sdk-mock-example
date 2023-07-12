import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class AwsSdkMockExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Here you need to define how you want to use your lambda
  }
}
