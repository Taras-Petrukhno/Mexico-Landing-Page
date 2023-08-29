import { deleteAsync } from "del"; 

export default () => {
    return deleteAsync(app.paths.destDirPath)
}

