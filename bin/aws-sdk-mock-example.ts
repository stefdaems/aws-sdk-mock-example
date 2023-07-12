#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsSdkMockExampleStack } from '../lib/aws-sdk-mock-example-stack';

const app = new cdk.App();
new AwsSdkMockExampleStack(app, 'AwsSdkMockExampleStack', {});