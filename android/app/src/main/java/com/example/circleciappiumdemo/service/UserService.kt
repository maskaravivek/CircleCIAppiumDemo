package com.example.circleciappiumdemo.service

import android.content.Context
import com.example.circleciappiumdemo.R
import java.util.*

open class UserService constructor(private var context: Context) {
    open fun login(username: String, password: String): String {
        return if (username.isNotEmpty() && password.isNotEmpty()) {
            val userNameFormat = context.getString(R.string.display_user_name)
            String.format(Locale.ENGLISH, userNameFormat, username)
        } else {
            val errorMessage = context.getString(R.string.login_error)
            String.format(Locale.ENGLISH, errorMessage, username)
        }
    }
}