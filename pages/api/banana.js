const banana = require("@banana-dev/banana-dev");

export default async function handler(req, res) {
    let prompt = req.body.prompt;
    console.log(prompt)
    let model_inputs = {
        "prompt": prompt,
        "negative_prompt": "ugly, blurry",
        "num_inference_steps": 50,
        "guidance_scale": 9,
        "seed": 1000
    }
    //API, model, params
    const response = await banana.run(
        process.env.BANANA_API_KEY,
        process.env.BANANA_MODEL_KEY,
        model_inputs
    ).then(function (context) {
        console.log("-----Banana-----")
        var imageStr = context["modelOutputs"][0]["image_base64"];

        res.statusCode = 201;
        res.end(JSON.stringify('data:image/jpg;base64,' + imageStr));
    });
}
