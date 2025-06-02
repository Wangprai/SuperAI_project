import axios from "axios";

interface TTSRequest {
    text: string;
    speaker: string;
    pace: number;
}

interface TTSResponse {
    wav_url: string;
}

const fetchSpeech = async (data: TTSRequest): Promise<TTSResponse> => {
  const response = await axios.post("https://vaoja-api.computing.kku.ac.th/text2speech", data);
  return response.data;
};

export default fetchSpeech;