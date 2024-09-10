function calculateCosts() {
    const numAlunos = document.getElementById('numAlunos').value;
    const numPerguntas = document.getElementById('numPerguntas').value;

    // Token values
    const memoryChat = document.getElementById('memoryChat').checked ? 400 : 0;
    const customization = document.getElementById('customization').checked ? 300 : 0;
    const syncData = document.getElementById('syncData').checked ? 107 : 0;
    const courseData = document.getElementById('courseData').checked ? 1090 : 0;
    const openAIData = document.getElementById('openAIData').checked ? 58 : 0;

    // Default prompt (always included)
    const defaultPrompt = 400;

    // Whisper and TTS check
    const audioInput = document.getElementById('audioInput').checked ? 0.006 : 0;
    const ttsEnabled = document.getElementById('ttsEnabled').checked ? 0.0495 : 0;

    const totalPerguntasMes = numPerguntas * 30;

    // GPT 3.5 Turbo Token Calculation
    const inputTokens = memoryChat + customization + syncData + courseData + defaultPrompt;
    const outputTokens = openAIData;

    const totalGPTTokens = totalPerguntasMes * (inputTokens + outputTokens) * numAlunos;
    const totalGPTCostUSD = ((inputTokens * 0.000003) + (outputTokens * 0.000004)) * totalPerguntasMes * numAlunos;
    const totalGPTCostBRL = totalGPTCostUSD * 5.6;

    // Whisper Cost Calculation
    const totalWhisperCostUSD = totalPerguntasMes * numAlunos * audioInput;
    const totalWhisperCostBRL = totalWhisperCostUSD * 5.6;

    // TTS Cost Calculation
    const totalTTSCostUSD = totalPerguntasMes * numAlunos * ttsEnabled;
    const totalTTSCostBRL = totalTTSCostUSD * 5.6;

    // Calculate Total Operational Cost and Cost per Student
    const totalOperationalCostBRL = totalGPTCostBRL + totalWhisperCostBRL + totalTTSCostBRL;
    const costPerStudentBRL = totalOperationalCostBRL / numAlunos;

    // Update the results in the UI
    document.getElementById('gptTokens').innerText = totalGPTTokens.toFixed(2);
    document.getElementById('gptCost').innerText = totalGPTCostBRL.toFixed(2);

    document.getElementById('whisperCost').innerText = totalWhisperCostBRL.toFixed(2);
    document.getElementById('ttsCost').innerText = totalTTSCostBRL.toFixed(2);

    document.getElementById('totalOperationalCost').innerText = totalOperationalCostBRL.toFixed(2);
    document.getElementById('costPerStudent').innerText = costPerStudentBRL.toFixed(2);
}
