
// Importing necessary functionalities from the Hardhat package.
import { ethers } from 'hardhat'

async function main() {
    // Retrieve the first signer, typically the default account in Hardhat, to use as the deployer.
    const [deployer] = await ethers.getSigners();
    const endTime = Math.floor(Date.now() / 1000) + 10000;
    console.log("endTime", endTime);
    const instancePresale = await ethers.deployContract("Presale", [endTime]);
    await instancePresale.waitForDeployment()
    const Presale_Address = await instancePresale.getAddress();
    console.log(`Presale is deployed. ${Presale_Address}`); //0x4159b6083be5bcc3d220cc9e7736D5dF83802E6c
}

// This pattern allows the use of async/await throughout and ensures that errors are caught and handled properly.
main().catch(error => {
    console.error(error)
    process.exitCode = 1
})