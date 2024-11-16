import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const AttentionExplorer = () => {
  const [inputTokens, setInputTokens] = useState(['The', 'cat', 'sat']);
  const [attentionWeights, setAttentionWeights] = useState([]);
  const [selectedToken, setSelectedToken] = useState(1); // Default to middle token

  // Calculate attention weights
  useEffect(() => {
    // Simplified attention weight calculation for demonstration
    const weights = inputTokens.map((_, i) => {
      const distance = Math.abs(i - selectedToken);
      return Math.exp(-distance) / inputTokens.length;
    });
    setAttentionWeights(weights); // fix: arguemnt of type 'number[]' is not assignable to parameter of type 'SetStateAction<number[]>'
  }, [selectedToken, inputTokens]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Self-Attention Explorer</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Input sequence visualization */}
        <div className="flex justify-center space-x-4 mb-8">
          {inputTokens.map((token, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedToken(idx)}
              className={`p-4 border rounded-lg cursor-pointer transition-all
                ${idx === selectedToken ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
              `}
            >
              <p className="text-lg font-mono">{token}</p>
              <p className="text-sm text-gray-500 mt-1">
                {attentionWeights[idx]?.toFixed(3)} 
              </p>
            </div>
          ))}
        </div>

        {/* Attention visualization */}
        <div className="relative h-32 mb-8">
          {inputTokens.map((_, idx) => (
            <div
              key={idx}
              className="absolute h-1 bg-blue-500 transition-all duration-300"
              style={{
                left: `${(idx / (inputTokens.length - 1)) * 100}%`,
                width: '2px',
                height: `${attentionWeights[idx] * 100}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>

        {/* Interactive controls */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Add Token:</label>
            <input
              type="text"
              className="border rounded p-2"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && e.target.value) { // fix: .value is undefined
                  setInputTokens([...inputTokens, e.target.value]); // fix: .value is undefined
                  e.target.value = ''; // fix: .value is undefined
                }
              }}
            />
          </div>
        </div>

        {/* Mathematical explanation */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Current Attention Calculation:</h3>
          <p className="font-mono text-sm">
            {`Q[${selectedToken}] · K = [${attentionWeights.map(w => w.toFixed(3)).join(', ')}]`}
          </p>
          <p className="text-sm mt-2 text-gray-600">
            Click on any token to see how attention weights change based on the selected query token.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttentionExplorer;