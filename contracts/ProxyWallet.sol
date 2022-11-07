// SPDX-License-Identifier: <SPDX-License>

pragma solidity ^0.4.25;

import "./TetherToken.sol";

contract ProxyWallet {
    address public fallbackAddress;
    address public usdtContractAddress;
    /**
     * All addresses should be in a hex format without 41 but with 0x
     * Example:
     * TSyUGKTr9JomhEM4jCgD1bZ27ef6Tgz8Ls -> 0xba86e11b56a66f7bb2663d5d49dd80b069265a37
     */

    function ProxyWallet() {
        usdtContractAddress = 0xba86e11b56a66f7bb2663d5d49dd80b069265a37;
    }

    function usdtBalance() public view returns(uint) {
        return TetherToken(usdtContractAddress).balanceOf(this);
    }

    function setFallbackAddress(address _fallbackAddress) public {
        fallbackAddress = _fallbackAddress;
    }

    function setUsdtContractAddress(address _usdtContractAddress) public {
        usdtContractAddress = _usdtContractAddress;
    }

    function sendTrx(address _to) public {
        _to.transfer(10000);
    }

    function sendUsdt(address _to) public {
        TetherToken usdt = TetherToken(usdtContractAddress);
        usdt.transfer(_to, 10000);
    }

    // Proxy transfer TRX to fallback address
    function() payable {
        fallbackAddress.transfer(msg.value);
    }
}