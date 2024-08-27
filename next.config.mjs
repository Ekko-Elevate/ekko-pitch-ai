/** @type {import('next').NextConfig} */
const nextConfig = {
	//this stops console logs and other things to occur twice
	reactStrictMode: false,
	//this ignores the dumb eror about not statically extractubg dependency
	webpack: (config, { isServer }) => {
		config.ignoreWarnings = [{ message: /Critical dependency/ }];
		return config;
	},
};

export default nextConfig;
