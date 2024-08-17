"use client";
import { useState } from "react";

export default function VidToVid() {
	const [videoFile, setVideoFile] = useState(null);
	const [voiceOverPrompt, setVoiceOverPrompt] = useState("");
	const [musicPrompt, setMusicPrompt] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!videoFile) {
			alert("Please upload a video file");
			return;
		}

		const formData = new FormData();
		formData.append("video", videoFile);
		formData.append("voiceOverPrompt", voiceOverPrompt);
		formData.append("musicPrompt", musicPrompt);

		try {
			const response = await fetch("/api/makegeneration/vidtovid", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				alert("Upload successful");
			} else {
				alert("Upload failed");
			}
		} catch (error) {
			console.error("Error:", error);
			alert("An error occurred");
		}
	};

	return (
		<>
			<div className="flex flex-col w-full h-full px-4 sm:px-6">
				<div className="py-6 sm:py-8 flex flex-row justify-center">
					<p className="text-lg sm:text-xl">Video To Video Tool</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
					<div className="col-span-1 sm:col-span-3 flex flex-col items-center justify-start gap-6 sm:gap-10 bg-[#002147] rounded-lg border-2 border-white p-4 sm:p-6">
						<form className="w-full flex-row" onSubmit={handleSubmit}>
							<div className="grow mb-4 sm:mb-6 flex flex-col">
								<label htmlFor="video-upload" className="text-white mb-2">
									Upload Video
								</label>
								<label className="flex h-full items-center justify-center bg-white rounded-lg border-2 border-white cursor-pointer sm:h-20">
									<span className="text-gray-700">
										{videoFile ? "Video Selected" : "Upload Video"}
									</span>
									<input
										type="file"
										id="video-upload"
										accept="video/*"
										className="hidden"
										onChange={(e) => setVideoFile(e.target.files[0])}
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
								></textarea>
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
								></textarea>
							</div>
							<div className="flex justify-center">
								<button
									type="submit"
									className="px-4 py-2 bg-red-600 text-white rounded-lg"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
					<div className="col-span-1 sm:col-span-2 flex flex-col items-center bg-[#002147] rounded-lg border-2 border-white p-4 sm:p-6">
						<p>Video Placeholder</p>
						<p>Download Button</p>
						<p>yo</p>
					</div>
				</div>
			</div>
		</>
	);
}
