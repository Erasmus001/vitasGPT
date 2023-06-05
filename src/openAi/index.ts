import { useAuth } from '@/Context/AuthContext';
import { OpenAIApi, Configuration } from 'openai';

const configuration = new Configuration({
	apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export const generateText = async (prompt: string, user?: string) => {
	// const { currentUser } = useAuth();
	// console.log(currentUser);

	const response = await openai.createChatCompletion({
		model: 'text-davinci-003',
		max_tokens: 3000,
		temperature: 0,
		frequency_penalty: 0.5,
		// user,
		presence_penalty: 0.2,
		messages: [
			{
				role: 'user',
				content: prompt,
			},
		],
	});

	console.log(response?.data?.choices[0]?.message);

	return response?.data?.choices[0]?.message;
};
