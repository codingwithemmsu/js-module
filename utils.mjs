export const buildID = ["63839-9393939","36373838-838383"]

export function displayMessage(){
    alert(`Hello form here`)
}

export class MyPipeline {
    constructor(buildID){
        this.buildID = buildID
    }

    runJobs(){
        this.buildID.forEach(job=>console.log(`build ${job} is running`))
    }
}