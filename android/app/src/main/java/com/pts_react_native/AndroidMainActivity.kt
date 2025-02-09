package com.pts_react_native

import android.app.Activity
import android.os.Bundle
import android.widget.ImageButton

class AndroidMainActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_android_main)

        val closeButton: ImageButton = findViewById(R.id.close_button)
        closeButton.setOnClickListener {
            finish()
        }
    }
}