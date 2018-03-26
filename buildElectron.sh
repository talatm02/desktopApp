# ionic cordova build browser --prod
# rm --rf www/*
# cp -r platforms/browser/www/* www/
# npm start

electron-packager . SuperApp --overwrite --platform=darwin --arch=x64 --prune=true --out=release-builds