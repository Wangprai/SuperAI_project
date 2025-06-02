import React, { useState } from "react";
import { Button, Input, Card, Typography, Spin, message } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import fetchSpeech from "../services/ttsService";

const { TextArea } = Input;
const { Title } = Typography;

const TextInput: React.FC = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!text.trim()) {
      message.warning("กรุณากรอกข้อความ");
      return;
    }

    setLoading(true);
    try {
      const response = await fetchSpeech({
        text,
        speaker: "mukda",
        pace: 1,
      });

      setAudioUrl(response.wav_url);
    } catch (error) {
      message.error("เกิดข้อผิดพลาดในการสร้างเสียง");
      console.error("TTS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card style={{ maxWidth: 600, margin: "40px auto", padding: 24 }}>
      <Title level={3}>Text-to-Speech ภาษาอีสาน</Title>

      <TextArea
        rows={4}
        placeholder="พิมพ์ข้อความที่นี่..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: 16 }}
      />

      <Button
        type="primary"
        icon={<AudioOutlined />}
        onClick={handleGenerate}
        loading={loading}
        block
      >
        แปลงข้อความเป็นเสียง
      </Button>

      {audioUrl && (
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <audio controls src={audioUrl} style={{ width: "100%" }} />
          <p>
            <a href={audioUrl} target="_blank" rel="noreferrer">
              🔗 เปิดเสียงในแท็บใหม่
            </a>
          </p>
        </div>
      )}

      {loading && (
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Spin tip="กำลังแปลงเสียง..." />
        </div>
      )}
    </Card>
  );
};

export default TextInput;
