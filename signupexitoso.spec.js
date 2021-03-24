// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test SignUp Exitoso', function() {
  this.timeout(40000)
  let driver
  let vars
  const data = [
    {test: 'SIGNUP EXITOSO', nombre: 'Testeo', apellido: 'Marquez', mail: 'testeo@gmail.com', password: 'Juan123', mensaje: 'Tu cuenta fue creada con exito'},
    {test: 'SIGNUP ERRONEO - PW', nombre: 'Juan', apellido: 'Marquez', mail: 'testeo1@gmail.com', password: 'Juanc', mensaje: "La contraseña debe tener al menos un número"},
    {test: 'SIGNUP ERRONEO - MAIL EXISTENTE', nombre: 'Testeo', apellido: 'Marquez', mail: 'testeo@gmail.com', password: 'Juan123', mensaje: 'Este email ya se encuentra en uso!'}
  ]
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
    
  })
  afterEach(async function() {
    await driver.quit();
  
  })
  data.map(test=> {
    it(test.test, async function() {
      await driver.get("http://localhost:3000/")
      await driver.manage().window().maximize()
      await driver.sleep(1000)
      await driver.findElement(By.linkText("SIGN IN")).click()
      await driver.sleep(1000)
      await driver.findElement(By.name("firstname")).click()
      await driver.sleep(1000)
      await driver.findElement(By.name("firstname")).sendKeys(test.nombre)
      await driver.sleep(1000)
      await driver.findElement(By.name("lastname")).click()
      await driver.sleep(1000)
      await driver.findElement(By.name("lastname")).sendKeys(test.apellido)
      await driver.sleep(1000)
      await driver.findElement(By.css("div:nth-child(4) > .inputsLog")).click()
      await driver.sleep(1000)
      await driver.findElement(By.css("div:nth-child(4) > .inputsLog")).sendKeys(test.mail)
      await driver.sleep(1000)
      await driver.findElement(By.css("div:nth-child(1) > .inputsLog")).click()
      await driver.sleep(1000)
      await driver.findElement(By.css("div:nth-child(1) > .inputsLog")).sendKeys(test.password)
      await driver.sleep(1000)
      await driver.findElement(By.css(".btnLog:nth-child(6)")).click()
      await driver.sleep(5000)
      assert(await driver.findElement(By.css(".rs-alert-item-content > div")).getText() == test.mensaje)
    })

  })
})
