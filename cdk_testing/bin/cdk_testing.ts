#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkTestingStack} from '../lib/cdk_testing-stack';
import { CdkTestingStacknum2} from '../lib/cdk_testing-stack2';
import { env } from 'process';


const arrStacks = [];
export var name=env["projectName"] as string;

// import { CdkpipelinesDemoPipelineStack } from '../lib/cdkpipeline-test';
const envEU  = { region: 'eu-west-1' };
const app = new cdk.App();
const params = app.node.tryGetContext("ctx1");
console.log(params)
const x= new Buffer(params);
let base64data = x.toString('base64');

console.log(base64data)
const paramValue= JSON.parse(base64data);
arrStacks.push( new CdkTestingStack(app, "s3back-"+name, {env:envEU}))
// console.log("CdkTestingStacknum2/"+name2)
arrStacks.push( new CdkTestingStacknum2(app,"sqs-"+name,{env:envEU}))
// app.synth();

arrStacks.forEach(stack => {
    //Add tags here
    console.log("tags")
    cdk.Tags.of(stack).add('ARM-StackId', stack.stackId);
    cdk.Tags.of(stack).add('ARM-StackType', stack.artifactId);
    cdk.Tags.of(stack).add('ARM-AppName', stack.stackName);
    cdk.Tags.of(stack).add('ARM-ProjectName', name);
    cdk.Tags.of(stack).add('ARM-StackVersion', "v0.1");
});
