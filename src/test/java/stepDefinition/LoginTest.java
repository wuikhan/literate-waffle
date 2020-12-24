package stepDefinition;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.BaseClass;

public class LoginTest extends BaseClass {


	@Given("^I enter valid username$")
	public void i_enter_valid_username()  {
		  System.out.println("Method Works");
		  Assert.assertTrue(true);
	}

	@Given("^I enter valid password$")
	public void i_enter_valid_password() {
		  System.out.println("Method Works");
	}

}