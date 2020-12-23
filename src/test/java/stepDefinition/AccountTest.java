package stepDefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.BaseClass;

public class AccountTest extends BaseClass{

	@Given("^I open chrome browser$")
	public void I_open_chrome_browser()  {
		openBrowser();
	}
	
	@Given("^I am on the login page$")
	public void I_am_on_the_login_page() {
	 driver.get("https://login.salesforce.com/");
	}
	
	@Given("^I enter username as \"([^\"]*)\"$")
	public void I_enter_username_as(String username) {
	   driver.findElement(By.id("username")).sendKeys(username);
	}

	@Given("^I enter password as \"([^\"]*)\"$")
	public void I_enter_password_as(String password) {
	   driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("^I click the login button$")
	public void I_click_the_login_button() {
	  driver.findElement(By.id("Login")).click();
	}

	@Then("^I should see the dashboard$")
	public void I_should_see_the_dashboard()  {
	  Assert.assertTrue(driver.findElement(By.linkText("Accounts")).isDisplayed());
	}

	@Then("^I click the Accounts tab$")
	public void I_click_the_Accounts_tab(){
	driver.findElement(By.linkText("Accounts")).click();
	}

	@Then("^I click the New button$")
	public void I_click_the_New_button() {
		driver.findElement(By.name("new")).click();
	}

	@Then("^I should see Account Name field$")
	public void I_should_see_Account_Name_field() {
	    Assert.assertTrue(driver.findElement(By.id("acc2")).isDisplayed());
	}

	@Then("^I should see Account Number field$")
	public void I_should_see_Account_Number_field()  {
		 Assert.assertTrue(driver.findElement(By.id("acc2")).isDisplayed());
	}

	@Then("^I should see Type field with different option$")
	public void I_should_see_Type_field_with_different_option()  {
		 Assert.assertTrue(driver.findElement(By.id("acc2")).isDisplayed());
	}

	@When("^I click the Save button$")
	public void I_click_the_Save_button() {
	 driver.findElement(By.xpath("//td[@id='topButtonRow']/input[@name='save']")).click();
	}
	
	@Then("^I quit the browser$")
	public void I_quit_the_browser() {
	 driver.quit();
	}
	
	@Then("^I should see an error message$")
	public void I_should_see_an_error_message() {
	    String errorMessage = driver.findElement(By.xpath("//div[@id='error']")).getText();
	    System.out.println(errorMessage);
	    Assert.assertEquals("Please check your username and password. If you still can't log in, contact your Salesforce administrator.", errorMessage);
	}

	@Then("^I should see the record$")
	public void I_should_see_the_record() {
	  
	}
	
	@Then("^I enter account name field as \"([^\"]*)\"$")
	public void I_enter_account_name_field_as(String accountName)  {
	   driver.findElement(By.id("acc2")).sendKeys(accountName);
	}

	@Then("^I enter account number field as \"([^\"]*)\"$")
	public void I_enter_account_number_field_as(String accountNumber)  {
	    driver.findElement(By.id("acc5")).sendKeys(accountNumber);
	}

	@Then("^I select the type field as \"([^\"]*)\"$")
	public void I_select_the_type_field_as(String value) {
	  WebElement typeSel = driver.findElement(By.id("acc6"));
	  Select type = new Select(typeSel);
	  type.selectByVisibleText(value);
	}
	
	@Then("^I should see the type field$")
	public void i_should_see_the_type_field()  {
	    driver.findElement(By.id("acc6")).isDisplayed();
	}

	@Then("^I should see the type options$")
	public void i_should_see_the_type_options() {
		String expectedType[] = { "--None--", "Prospect", "Customer - Direct", "Customer - Channel",
				"Channel Partner / Reseller", "Installation Partner", "Technology Partner", "Other" };

    WebElement type = driver.findElement(By.id("acc6"));
		Select typeSel = new Select(type);
		List<WebElement> typeOptions = typeSel.getOptions();
		for (int i = 0; i < typeOptions.size(); i++) {
			Assert.assertEquals(expectedType[i], typeOptions.get(i).getText());
		}
	}
	}