const {Builder, Capabilities, By} = require("selenium-webdriver");
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test ('add a movie', async () => {
    const inputField = await driver.findElement(By.xpath('//input'))
    await inputField.sendKeys('Tron: Legacy')
    await driver.sleep(2000)

    const theButton = await driver.findElement(By.css('button'));
    await theButton.click()
    await driver.sleep(2000)
})

test ('mark as watched', async () => {
    const mark = driver.findElement(By.xpath('//span[text()="Tron: Legacy"]'))
    await mark.click()
    await driver.sleep(991)
    
})

test ('check for hide', async () => {
  await driver.findElement(By.className("hide"))
  
//    "mark" class shows up for the aside element after 990 miliseconds.
//   THat is why I did a 991 millisecond driver.sleep for the previous test. Anything less than 991 this test will fail.


})

test ('delete a movie', async () => {
     await driver.findElement(By.id('Tron:Legacy')).click()
    await driver.sleep(2000)
})

