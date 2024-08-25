"use client";
import { useState, useCallback } from "react";

export default function ImgToVid() {
	const [imageFile, setImageFile] = useState(null);
	const [voiceOverPrompt, setVoiceOverPrompt] = useState("");
	const [musicPrompt, setMusicPrompt] = useState("");
	const [scenePrompt, setScenePrompt] = useState("");

	const [isLoading, setIsLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState(null);
	const [videoId, setVideoId] = useState(null);

	const handleFileChange = useCallback((e) => {
		const file = e.target.files[0];
		if (file) {
			setImageFile(file);
			setImageUrl(URL.createObjectURL(file));
		}
	}, []);

	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault();

			if (!imageFile) {
				alert("Please upload an image file");
				return;
			}

			setIsLoading(true);

			const formData = new FormData();
			formData.append("image", imageFile);
			formData.append("voiceOverPrompt", voiceOverPrompt);
			formData.append("musicPrompt", musicPrompt);
			formData.append("scenePrompt", scenePrompt);

			try {
				const response = await fetch("/api/makegeneration/imgtovid", {
					method: "POST",
					body: formData,
				});

				if (response.ok) {
					const data = await response.json();
					setVideoId(data.id);
					alert("Upload and processing successful");
				} else {
					alert("Upload failed");
				}
			} catch (error) {
				console.error("Error:", error);
				alert("An error occurred");
			} finally {
				setIsLoading(false);
			}
		},
		[imageFile, voiceOverPrompt, musicPrompt, scenePrompt]
	);

	return (
		<div className="flex flex-col w-full h-full px-4 sm:px-6">
			<div className="py-6 sm:py-8 flex flex-row justify-center">
				<p className="text-lg sm:text-xl">Image To Video Tool</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
				<div className="col-span-1 sm:col-span-2 flex flex-col items-center justify-start gap-6 sm:gap-10 bg-[#002147] rounded-lg border-2 border-white p-4 sm:p-6 h-[650px] overflow-y-auto">
					<form className="w-full flex-row" onSubmit={handleSubmit}>
						<div className="grow mb-4 sm:mb-6 flex flex-col">
							<label htmlFor="image-upload" className="text-white mb-2">
								Upload Image
							</label>
							<label className="flex h-40 items-center justify-center bg-white rounded-lg border-2 border-white cursor-pointer">
								{isLoading ? (
									<span className="text-gray-700">Loading...</span>
								) : imageUrl ? (
									<img
										src={imageUrl}
										className="w-full h-full object-cover"
										alt="Uploaded"
									/>
								) : (
									<span className="text-gray-700">Upload Image</span>
								)}
								<input
									type="file"
									id="image-upload"
									accept="image/*"
									className="hidden"
									onChange={handleFileChange}
								/>
							</label>
						</div>
						<div className="mb-4 sm:mb-6 flex flex-col">
							<label htmlFor="voice-over-prompt" className="text-white mb-2">
								Input Voice Over Prompt
							</label>
							<textarea
								id="voice-over-prompt"
								className="rounded-lg border-2 border-white bg-white text-black p-2 resize-none h-28"
								placeholder="Enter voice over prompt"
								value={voiceOverPrompt}
								onChange={(e) => setVoiceOverPrompt(e.target.value)}
							/>
						</div>
						<div className="mb-4 sm:mb-6 flex flex-col">
							<label htmlFor="music-prompt" className="text-white mb-2">
								Input Music Prompt
							</label>
							<textarea
								id="music-prompt"
								className="rounded-lg border-2 border-white bg-white text-black p-2 resize-none h-28"
								placeholder="Enter music prompt"
								value={musicPrompt}
								onChange={(e) => setMusicPrompt(e.target.value)}
							/>
						</div>
						<div className="mb-4 sm:mb-6 flex flex-col">
							<label htmlFor="scene-prompt" className="text-white mb-2">
								Input Scene Prompt
							</label>
							<textarea
								id="scene-prompt"
								className="rounded-lg border-2 border-white bg-white text-black p-2 resize-none h-28"
								placeholder="Enter scene prompt"
								value={scenePrompt}
								onChange={(e) => setScenePrompt(e.target.value)}
							/>
						</div>
						<div className="flex justify-center">
							<button
								type="submit"
								className="px-4 py-2 bg-red-600 text-white rounded-lg"
								disabled={isLoading}
							>
								{isLoading ? "Processing..." : "Submit"}
							</button>
						</div>
					</form>
				</div>
				<div className="col-span-1 sm:col-span-2 flex flex-col items-center justify-center bg-[#002147] rounded-lg border-2 border-white p-4 sm:p-6 h-[650px]">
					{videoId ? (
						<>
							<video controls className="w-full h-auto mb-4">
								<source
									src={`/api/makegeneration/_output/${videoId}.mp4`}
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
							<a
								href={`/api/makegeneration/_output/${videoId}.mp4`}
								download
								className="px-4 py-2 bg-blue-600 text-white rounded-lg"
							>
								Download Video
							</a>
						</>
					) : (
						<p className="text-white">
							Video will appear here after processing
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
