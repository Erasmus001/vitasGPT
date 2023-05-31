import axios from 'axios';

export const generateResponse = async (prompt: string) => {
	const apiKey = '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';
	const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

	const response = await axios.post(
		apiUrl,
		{
			prompt: prompt,
			max_tokens: 100,
		},
		{
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json',
			},
		}
	);

	return response.data.choices[0].text;
};
