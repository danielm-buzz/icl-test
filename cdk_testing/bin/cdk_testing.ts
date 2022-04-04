#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkTestingStack, name } from '../lib/cdk_testing-stack';
import { CdkTestingStacknum2,name as name2 } from '../lib/cdk_testing-stack2';

// import { CdkpipelinesDemoPipelineStack } from '../lib/cdkpipeline-test';
const envEU  = { region: 'eu-west-1' };
const app = new cdk.App();
new CdkTestingStack(app, "s3back-"+name, {env:envEU});
// console.log("CdkTestingStacknum2/"+name2)
new CdkTestingStacknum2(app,"sqs-"+name2,{env:envEU});
// app.synth();