using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using OpenQA.Selenium.Support.UI;

namespace SpiderDogTest
{
    public class SpiderDogTests
    {
        ChromeDriver _browser = null;
        private string _url = null;
        [SetUp]
        public void Setup()
        {
            ChromeOptions options = new ChromeOptions();
            _browser = new ChromeDriver(options);

            // inaas testurl
            //_url = @"file:///Users/inaasisse/Frontend/SpiderDog-1/index.html"; 

            // niklas testurl
            _url = @"file:///C:/Git/Teknikh%C3%B6gskolan/Frontend/Gruppuppgift%204%20-%20Slutuppgift/SpiderDog/index.html";

        }

        [TearDown]
        public void TearDown()
        {
            _browser.Quit();
        }

     

        [TestCase("Lydnad")]
        [TestCase("Fysik")]
        [TestCase("Spåra")]
        [TestCase("Stadga")]
        [TestCase("Lekfullhet")]
        [TestCase("Rörlighet")]
        public void CreateSuccessfullItemWithCategory(string categoryName)
        {
            _browser.Navigate().GoToUrl(_url);
            _browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);


            FillForm(categoryName);
           
            var listItemCategoryName = _browser.FindElement(By.ClassName("category")).Text;

            Assert.AreEqual(categoryName, listItemCategoryName); 

        }
        
        [Test]
        
        public void ChangeRating([Values(1, 2, 3, 4, 5)] int index)
        {
            _browser.Navigate().GoToUrl(_url);
            _browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);
            FillForm("Fysik");

           
            _browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);
            var rateInput = _browser.FindElement(By.CssSelector($"label[for='0star{index}']"));
            rateInput.Click();

            var radioButton = _browser.FindElement(By.Id($"0star{index}"));

            Assert.IsTrue(radioButton.Selected);

        }


        [Test]
        public void DeleteListItem()
        {
            _browser.Navigate().GoToUrl(_url);
            _browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);
            FillForm("Fysik");

            var list = _browser.FindElement(By.Id("training-list"));
            var button = list.FindElement(By.TagName("button"));
            button.Click();

            var listItems = list.FindElements(By.TagName("li"));
            Assert.AreEqual(0, listItems.Count);

        }




        private void FillForm(string categoryName)
        {
            var trickNameInput = _browser.FindElement(By.Id("trick-name"));
            trickNameInput.SendKeys("Sitt");

            var trickSignInput = _browser.FindElement(By.Id("sign-name"));
            trickSignInput.SendKeys("Lyft handen");

            var trickCommandInput = _browser.FindElement(By.Id("command-name"));
            trickCommandInput.SendKeys("Sitt!");

            var trickDescriptionInput = _browser.FindElement(By.Id("description-name"));
            trickDescriptionInput.SendKeys("Få hunden att sitta");

            var trickCategoryInput = new SelectElement(_browser.FindElement(By.Id("item-name")));
            trickCategoryInput.SelectByValue(categoryName);
            trickDescriptionInput.SendKeys(Keys.Enter);
        }
    }

}