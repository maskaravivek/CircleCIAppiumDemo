describe("Android Login Test", () => {
    it("should login with valid credentials", async () => {
        const usernameField = await driver.$('//android.widget.EditText[@resource-id="com.example.circleciappiumdemo:id/user_name_field"]'); // Using accessibility ID
        const passwordField = await driver.$('//android.widget.EditText[@resource-id="com.example.circleciappiumdemo:id/user_password_field"]');
        const loginButton = await driver.$('//android.widget.Button[@resource-id="com.example.circleciappiumdemo:id/login_button"]');
        const displayUserName = await driver.$('//android.widget.TextView[@resource-id="com.example.circleciappiumdemo:id/display_user_name"]');

        await usernameField.setValue("testUser");
        await passwordField.setValue("password123");
        await loginButton.click();
        await driver.pause(2000);
        const displayedText = await displayUserName.getText();
        expect(displayedText).toContain("testUser");
    });
});
