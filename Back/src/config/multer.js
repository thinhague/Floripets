import crypto from 'crypto';
import multer from 'multer';
import { extname, resolve } from 'path';


export default {
    upload(folder) {
        return {
            storage:multer.diskStorage({
                destination:resolve(__dirname,'..','..',folder),
                filename:(request,file,callback) => {
                    const fileHash = crypto.randomBytes(16).toString('hex');
                    const fileName = `${fileHash}_${file.originalname}`
                    return callback(null,fileName)
                }
            })
        }
    }
}