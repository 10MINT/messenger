# TextSecure
### An instant messenger with end-to-end encryption, created with Thunkable

## To Do
* Set up your FirebaseDB in all screens. I highly recommend using a custom FirebaseDB. Follow [this tutorial](https://community.thunkable.com/t/firebase-and-where-to-put-it/713/2) 
on how to set up a custom FirebaseDB. 
* Set up Firebase Storage in all screens. Click [here](https://community.thunkable.com/t/free-firebasestorage-extension/8544) to see how to set up Firebase Storage

## How To
* Click the top FAB to generate a new code. Click it again to get back to your chat list
* Click the bottom FAB to scan another person's pairing code.
* Once the pairing was successful, the chat of your partner will open
* To rename the chat, click your partner's name in the top bar
* To change your default name and profile picture, click the top-right icon in the chat overview

## Goals
* Create a messenger without server code
* KISS (Keep It Simple, Stupid)
* Customization on the backend
* It does not need to be scalable, because it is intended for private use
* Security through encryption

## Disclosure
The chats are not encrypted on your device. One can access the application's folder on a rooted phone. 
Once you paired with your partner, the chat is end-to-end encrypted. Your media is still stored in Firebase Storage and it's not encrypted.

## Used Extensions
* [FileAlt](https://github.com/10MINT/extensions/tree/master/FileAlt) by Me
* [I18n](https://github.com/10MINT/extensions/tree/master/I18n) by Me
* [ColinTreeListView](http://aix.colintree.cn/en/extensions/ColinTreeListView.html) by @ColinTree
* [FirebaseStorage](https://community.thunkable.com/t/free-firebasestorage-extension/8544) by @mirxtrem-apps
* [QrCode](https://nmd-apps.jimdo.com/extensions/nmd-extensions/#3) by @NmdOfficial
* [Notifications](https://community.thunkable.com/t/new-notification-to-status-bar-extension/11722) by [tiziano1960](https://community.thunkable.com/u/tiziano1960/summary)
* [cryptoextension](https://community.thunkable.com/t/free-another-aes-encryption-extension/9722) by [tiziano1960](https://community.thunkable.com/u/tiziano1960/summary)

Thanks to all extension developers!

## Issues
* The chat partners have to be in-app (without background tasks)
* The WebViewer has a problem with fullscreen videos (see [this](https://community.thunkable.com/t/webviewer-problem-with-fullscreen-video/3083) post)
* Sending videos is temporarily disabled, because the they crash the app

## Developer's Guide
* See the [wiki](https://github.com/10MINT/textme-sources/wiki)

## Changelog
* ?/?/2018: Initial release with version 5