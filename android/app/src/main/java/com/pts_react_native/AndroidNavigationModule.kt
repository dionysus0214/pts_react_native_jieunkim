package com.pts_react_native

import android.app.Activity
import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class AndroidNavigationModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AndroidNavigation"
    }

    @ReactMethod
    fun openAndroidScreen() {
        val activity: Activity? = currentActivity
        if (activity != null) {
            val intent = Intent(activity, AndroidMainActivity::class.java)
            activity.startActivity(intent)
        } else {
            Log.e("AndroidNavigation", "Activity is null")
        }
    }
}