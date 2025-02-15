/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
  Forc version: 0.65.1
  Fuel-Core version: 0.37.0
*/

import {
  Account,
  BigNumberish,
  BN,
  decompressBytecode,
  Script,
} from 'fuels';

export type BakoScriptInputs = [];
export type BakoScriptOutput = BN;

const abi = {
  "programType": "script",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [],
  "functions": [
    {
      "inputs": [],
      "name": "main",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": null
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
};

const bytecode = decompressBytecode('H4sIAAAAAAAAA01Rv0vDQBT+UiNm0lMjlKuFDrVkLFjoeiENrbbggRQdPOLoWII4Z3TUwR9j/4QLODj2T+if0NGhARch0iG+BLW55d59733f++49/tnGLVBBcYy5ymYGyzLwpcQjjJm8iEUjPcblalGRq4VJtVfcmyNI0FXnuhsKEy0BcDGB7OsJ4ds5RvdOsAQLBapOYkN6+j3sUey9CdmPZTig2Dcj6cWsiF07In51jev7P1yd6V011HvK0/ukYTHfFAe+Hd31YJCfTcIqtZOmaA0Ap94BH03A/A4CX6Cod03qqedB0uZB0qiRt0PSb5f6piU/N2s8npbwKb2dkr9Bif9fRx5t6TMmh/qD+tSl27DCESyqmxHnmvwwx23mM4iIw361H4qYtIr82BTKlYYaSxyNgSdg49miGdNOuLfI/7TFvxj4N/BK+AvlT1OgTxv8AVfElhzQAQAA');

export class BakoScript extends Script<BakoScriptInputs, BakoScriptOutput> {

  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(wallet: Account) {
    super(bytecode, abi, wallet);
  }
}
