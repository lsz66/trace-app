package com.traceapp.module;

import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.yanzhenjie.permission.AndPermission;
import com.yanzhenjie.permission.runtime.Permission;
import com.yzq.zxinglibrary.android.CaptureActivity;
import com.yzq.zxinglibrary.common.Constant;

public class ScannerModule extends ReactContextBaseJavaModule {

    private final int SCANNER_REQUEST = 929;

    private Promise mPickerPromise;

    public ScannerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(new BaseActivityEventListener() {
            @Override
            public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
                if (requestCode == SCANNER_REQUEST) {
                    if (mPickerPromise != null) {
                        if (resultCode == Activity.RESULT_OK) {
                            String content = data.getStringExtra(Constant.CODED_CONTENT);
                            mPickerPromise.resolve(content);
                        }

                        mPickerPromise = null;
                    }
                }
            }
        });
    }

    @NonNull
    @Override
    public String getName() {
        return "Scanner";
    }

    @ReactMethod
    public void scan(final Promise promise) {
        Activity currentActivity = getCurrentActivity();
        assert currentActivity != null;
        AndPermission.with(currentActivity)
                .runtime()
                .permission(Permission.CAMERA)
                .onGranted(i -> {
                    Intent intent = new Intent(currentActivity, CaptureActivity.class);
                    mPickerPromise = promise;
                    currentActivity.startActivityForResult(intent, SCANNER_REQUEST);
                })
                .onDenied(i -> Toast.makeText(currentActivity, "你倒是给我权限啊", Toast.LENGTH_SHORT).show())
                .start();
    }
}
