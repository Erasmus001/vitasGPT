import { OpenAIApi, Configuration } from 'openai';

const configuration = new Configuration({
	apiKey: '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',
});

const openai = new OpenAIApi(configuration);
// const models = await openai.listModels();

export const generateText = async (prompt: string) => {
	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		max_tokens: 3000,
		temperature: 0,
		frequency_penalty: 0.5,
		user: '',
		presence_penalty: 0.2,
		prompt,
	});

	console.log(response?.data?.choices[0]?.text);

	return response?.data?.choices[0]?.text;
};
