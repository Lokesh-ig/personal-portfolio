import React, { useState } from 'react';
import { Terminal, Copy, Check, Cpu } from 'lucide-react';

interface CodeSnippet {
  id: string;
  filename: string;
  language: string;
  badge: string;
  badgeColor: string;
  code: string;
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: 'bert',
    filename: 'toxicity_bert.py',
    language: 'python',
    badge: 'BERT + Flask',
    badgeColor: 'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30',
    code: `# ToxiGuard: BERT Multi-Label Classifier
import torch
from transformers import BertForSequenceClassification, BertTokenizer
from flask import Flask, request, jsonify

app = Flask(__name__)
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('./model_weights')

@app.route('/api/v1/moderate', methods=['POST'])
def moderate_comment():
    text = request.json.get('text', '')
    inputs = tokenizer(text, return_tensors='pt', truncation=True, max_length=128)
    with torch.no_grad():
        logits = model(**inputs).logits
    probs = torch.sigmoid(logits).squeeze().tolist()
    
    # Threshold rules: [toxic, severe, obscene, threat, insult]
    decision = "ALLOW" if max(probs) < 0.45 else ("DELETE" if max(probs) > 0.85 else "FLAG")
    return jsonify({"decision": decision, "scores": probs})`
  },
  {
    id: 'yolo',
    filename: 'object_tracker.py',
    language: 'python',
    badge: 'YOLO + DeepSORT',
    badgeColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
    code: `# Real-Time Vision Pipeline: YOLO + Deep SORT
import cv2
from ultralytics import YOLO
from deep_sort_realtime.deepsort_tracker import DeepSort

detector = YOLO('yolov8n.pt')
tracker = DeepSort(max_age=30, n_init=3)

def process_frame(frame):
    results = detector(frame, stream=True)
    detections = []
    for r in results:
        for box in r.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])
            conf, cls_id = float(box.conf[0]), int(box.cls[0])
            detections.append(([x1, y1, x2 - x1, y2 - y1], conf, cls_id))
    
    tracks = tracker.update_tracks(detections, frame=frame)
    for track in tracks:
        if not track.is_confirmed(): continue
        tid = track.track_id
        l, t, w, h = track.to_ltrb()
        cv2.rectangle(frame, (int(l), int(t)), (int(w), int(h)), (0, 255, 128), 2)
        cv2.putText(frame, f"ID:{tid}", (int(l), int(t)-10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 128), 2)
    return frame`
  },
  {
    id: 'django',
    filename: 'onboarding_views.py',
    language: 'python',
    badge: 'Django + REST',
    badgeColor: 'from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30',
    code: `# Enterprise Onboarding Checklist View
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Employee, DocumentChecklist

class OnboardingViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    
    @action(detail=True, methods=['post'], url_path='submit-document')
    def submit_document(self, request, pk=None):
        employee = self.get_object()
        doc_type = request.data.get('document_type')
        uploaded_file = request.FILES.get('file')
        
        checklist, created = DocumentChecklist.objects.get_or_create(employee=employee)
        checklist.verify_and_update(doc_type, uploaded_file)
        
        progress = checklist.calculate_completion_percentage()
        return Response({'status': 'Submitted', 'progress': progress}, status=status.HTTP_200_OK)`
  },
  {
    id: 'react',
    filename: 'ModerationWorkflow.tsx',
    language: 'typescript',
    badge: 'React + TypeScript',
    badgeColor: 'from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30',
    code: `// React Real-Time Moderation Component
import React, { useState } from 'react';

export const ModerationCard = ({ commentId, commentText }) => {
  const [status, setStatus] = useState<'IDLE' | 'ANALYZING' | 'FLAGGED' | 'ALLOWED'>('IDLE');

  const analyzeContent = async () => {
    setStatus('ANALYZING');
    const res = await fetch('/api/v1/moderate', {
      method: 'POST',
      body: JSON.stringify({ text: commentText })
    });
    const data = await res.json();
    setStatus(data.decision);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
      <p className="text-sm text-slate-200">{commentText}</p>
      <span className="mt-2 text-xs font-mono px-2 py-1 rounded bg-slate-800 text-cyan-400">
        Status: {status}
      </span>
    </div>
  );
};`
  }
];

export const InteractiveCodeTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippet = SNIPPETS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Subtle Glow Backdrop */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-60 animate-pulse" />

      {/* Code Window Container */}
      <div className="relative bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden glass-panel">
        {/* Window Control Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0b0f17]/90 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              lokesh-dev-workspace
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${snippet.badgeColor}`}>
              {snippet.badge}
            </span>
            <button
              onClick={handleCopy}
              className="p-1 text-slate-400 hover:text-white bg-slate-800/60 rounded transition-colors"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center overflow-x-auto bg-[#0d1322] border-b border-slate-800/80 px-2 pt-1 scrollbar-none">
          {SNIPPETS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center space-x-2 px-3.5 py-2 text-xs font-mono border-t-2 transition-all whitespace-nowrap ${
                activeTab === idx
                  ? 'border-cyan-400 bg-[#0f172a] text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <span>{item.filename}</span>
            </button>
          ))}
        </div>

        {/* Code Content Container */}
        <div className="p-4 sm:p-5 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed bg-[#0b0f17]/95 max-h-[320px] scrollbar-thin">
          <pre className="selection:bg-cyan-500/30 selection:text-cyan-200">
            <code>
              {snippet.code.split('\n').map((line, lineIdx) => (
                <div key={lineIdx} className="table-row">
                  <span className="table-cell pr-4 select-none text-slate-600 text-[11px] text-right">
                    {lineIdx + 1}
                  </span>
                  <span className="table-cell">
                    {line.startsWith('#') || line.startsWith('//') ? (
                      <span className="text-slate-500 italic">{line}</span>
                    ) : line.includes('import') || line.includes('from') || line.includes('def') || line.includes('class') || line.includes('return') || line.includes('const') ? (
                      <span className="text-cyan-400">{line}</span>
                    ) : line.includes('@') || line.includes('jsonify') || line.includes('Response') ? (
                      <span className="text-indigo-400">{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        {/* Interactive Tech Tags & Status Bar */}
        <div className="px-4 py-2.5 bg-[#0d1322] border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-medium">READY</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Stack: Python • BERT • React • Django • YOLO</span>
          </div>
          <div className="flex items-center space-x-1.5 text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI Inference OK</span>
          </div>
        </div>
      </div>
    </div>
  );
};
