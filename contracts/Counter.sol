// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "hardhat/console.sol";

// contract Counter {
//     uint32 count;
//     event CounterInc(uint32 count);

//     function incrementCount() public {
//         count++;
//         console.log(count);
//         emit CounterInc(count);
//     }

//     function getCount() public view returns (uint32) {
//         return count;
//     }
// }

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint256 counter;

    event CounterInc(uint256 counter);

    function count() public {
        counter++;
        console.log("Counter is now", counter);
        emit CounterInc(counter);
    }

    function getCounter() public view returns (uint32) {
        return uint32(counter);
    }
}
