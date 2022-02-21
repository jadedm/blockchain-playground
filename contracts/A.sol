// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract A {
    uint256 a;

    function setA(uint256 _a) public {
        a = _a;
    }

    function getA() public view returns (uint256) {
        return a;
    }
}

// contract B {
//     uint256 a;
//     address ContractA;

//     constructor(address _A) {
//         ContractA = _A;
//     }

//     function setB(uint256 _a) public {
//         a = _a;
//         // A(ContractA).setA(_a + 1);
//         ContractA.delegatecall(abi.encodeWithSignature("setA(uin256)", _a + 1));
//     }

//     function getB() public view returns (uint256) {
//         return a;
//     }
// }

contract B {
    uint256 b;
    address ContractA;

    constructor(address _A) {
        ContractA = _A;
    }

    function setB(uint256 _b) public {
        b = _b;
        // A(ContractA).setA(_a + 1);
        (bool success, bytes memory bbb) = ContractA.delegatecall(
            abi.encodeWithSignature("setA(uin256)", _b + 1)
        );

        console.log("success", success);
    }

    function getB() public view returns (uint256) {
        return b;
    }
}
