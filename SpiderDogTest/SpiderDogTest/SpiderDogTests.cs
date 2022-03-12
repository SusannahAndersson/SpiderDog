using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
;

namespace SpiderDogTest
{
    public class SpiderDogTests
    {
        ChromeDriver _browser = null;
        [SetUp]
        public void Setup()
        {
            ChromeOptions options = new ChromeOptions();
            _browser = new ChromeDriver(options);
        }

        [TearDown]
        public void TearDown()
        {
            //_browser.Quit();
        }

        [Test]
        public void OpenSite()
        {
            _browser.Navigate().GoToUrl(@"https://www.google.com");
            _browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);
            string expected = "Google";

            Assert.AreEqual(expected, _browser.Title);
        }
    }
}