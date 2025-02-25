package com.example.circleciappiumdemo

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.circleciappiumdemo.service.UserService

class MainActivity : AppCompatActivity() {

    var button: Button? = null
    var userNameField: EditText? = null
    var userPasswordField: EditText? = null
    var displayUserName: TextView? = null

    lateinit var userService: UserService;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        userService = UserService(this)
        initViews()
    }

    private fun initViews() {
        button = this.findViewById(R.id.login_button)
        userNameField = this.findViewById(R.id.user_name_field)
        userPasswordField = this.findViewById(R.id.user_password_field)
        displayUserName = this.findViewById(R.id.display_user_name)

        this.button!!.setOnClickListener {
            displayUserName!!.text = userService
                .login(userNameField!!.text.toString(), userPasswordField!!.text.toString())
        }
    }
}