// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GasReporter {
    uint256 a;
    uint256 b;
    uint256 c;

    function report1() public {
        a++;
    }

    function report2() public {
        a++;
        b++;
    }

    function report3() public {
        a++;
        b++;
        c++;
    }

    function report4() public {
        c = a + b;
    }

    function report5() public {
        report4();
        c = a + b;
    }
}
