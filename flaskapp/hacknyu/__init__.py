from flask import Flask, request, jsonify
# from huggingface_hub import hf_hub_download
# import joblib

# Load the phishing detection model
# model_path = hf_hub_download("pirocheto/phishing-url-detection", "sklearn_model.joblib")
# model = joblib.load(model_path)

app = Flask(__name__)

@app.route("/", methods=["GET"])
def predict():
    return jsonify({"message": "All good"}), 200

# @app.route("/predict", methods=["POST"])
# def predict():
#     data = request.get_json()
#     url = data.get("url")

#     if not url:
#         return jsonify({"error": "No URL provided"}), 400

#     try:
#         # Make prediction
#         prediction = model.predict([url])[0]
#         confidence = model.predict_proba([url])[0][prediction]

#         label = "Phishing" if prediction == 1 else "Safe"

#         # Return response with status 200
#         return jsonify({
#             "status": 200,
#             "message": "Prediction successful",
#             "label": label,
#             "confidence": confidence * 100
#         }), 200

#     except Exception as e:
#         # Handle any unexpected errors during prediction
#         return jsonify({
#             "status": 500,
#             "error": f"An error occurred: {str(e)}"
#         }), 500

