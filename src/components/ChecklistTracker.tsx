import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, RotateCcw, Plus, Sparkles, Filter, Award, AlertCircle } from 'lucide-react';
import { ChecklistItem, INITIAL_CHECKLIST, DEFAULT_CHECKLIST_STAGES } from '../data/checklist';
import { playMechaClick, playTaskComplete } from '../utils/sound';

export const ChecklistTracker: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    try {
      const saved = localStorage.getItem("gundam_checklist_state");
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return INITIAL_CHECKLIST;
  });

  const [selectedStage, setSelectedStage] = useState<string>("ALL");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskStage, setNewTaskStage] = useState(DEFAULT_CHECKLIST_STAGES[0]);
  const [newTaskTip, setNewTaskTip] = useState("");

  // Save to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem("gundam_checklist_state", JSON.stringify(items));
    } catch {
      // Ignore
    }
  }, [items]);

  const toggleItem = (id: string) => {
    setItems(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          const nextState = !item.completed;
          if (nextState) playTaskComplete();
          else playMechaClick();
          return { ...item, completed: nextState };
        }
        return item;
      });
      return updated;
    });
  };

  const resetToDefault = () => {
    playMechaClick();
    if (window.confirm("Bạn có chắc chắn muốn đặt lại toàn bộ checklist về mặc định không?")) {
      setItems(INITIAL_CHECKLIST);
    }
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newItem: ChecklistItem = {
      id: "custom-" + Date.now(),
      stage: newTaskStage,
      task: newTaskTitle.trim(),
      tip: newTaskTip.trim() || "Nhiệm vụ tùy chỉnh của Builder",
      completed: false,
      priority: "medium"
    };
    setItems(prev => [...prev, newItem]);
    setNewTaskTitle("");
    setNewTaskTip("");
    setShowAddModal(false);
    playTaskComplete();
  };

  const totalTasks = items.length;
  const completedTasks = items.filter(i => i.completed).length;
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const filteredItems = items.filter(item => {
    if (selectedStage === "ALL") return true;
    return item.stage === selectedStage;
  });

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 tech-box space-y-6">
      {/* Top Banner & Progress Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-wider mb-1">
            <CheckSquare className="w-4 h-4 text-cyan-400" />
            <span>PROJECT MANAGEMENT // TIẾN ĐỘ THI CÔNG</span>
          </div>
          <h3 className="text-xl font-bold font-mecha text-white">
            Nhật Ký & Checklist Lắp Ráp Gunpla Thực Chiến
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Đánh dấu từng công đoạn từ kiểm tra runner đến phủ topcoat bảo vệ. Dữ liệu được tự động lưu trên trình duyệt của bạn.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => { playMechaClick(); setShowAddModal(true); }}
            className="px-3 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-tech font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm Nhiệm Vụ</span>
          </button>
          <button
            onClick={resetToDefault}
            className="p-2 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-colors"
            title="Đặt lại checklist"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar & Status */}
      <div className="p-4 bg-slate-950 border border-cyan-500/30 space-y-2">
        <div className="flex justify-between items-center text-xs font-tech">
          <span className="text-slate-300">
            TỔNG TIẾN ĐỘ HOÀN THIỆN DỰ ÁN:
          </span>
          <span className="text-cyan-400 font-bold text-sm">
            {completedTasks} / {totalTasks} BƯỚC ({progressPercent}%)
          </span>
        </div>

        <div className="w-full h-3 bg-slate-900 overflow-hidden border border-slate-800 relative">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {progressPercent === 100 && (
          <div className="pt-2 flex items-center gap-2 text-xs font-tech text-emerald-400 animate-pulse">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>MISSION ACCOMPLISHED // CHÚC MỪNG BẠN ĐÃ HOÀN TẤT TUYỆT PHẨM MÔ HÌNH!</span>
          </div>
        )}
      </div>

      {/* Stage Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 pb-2 border-b border-slate-800">
        <button
          onClick={() => { playMechaClick(); setSelectedStage("ALL"); }}
          className={`px-2.5 py-1 text-xs font-tech transition-colors ${
            selectedStage === "ALL"
              ? "bg-cyan-500 text-slate-950 font-bold"
              : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          TẤT CẢ GIAI ĐOẠN ({items.length})
        </button>
        {DEFAULT_CHECKLIST_STAGES.map(stage => {
          const count = items.filter(i => i.stage === stage).length;
          const done = items.filter(i => i.stage === stage && i.completed).length;
          return (
            <button
              key={stage}
              onClick={() => { playMechaClick(); setSelectedStage(stage); }}
              className={`px-2.5 py-1 text-xs font-tech transition-colors ${
                selectedStage === stage
                  ? "bg-cyan-500 text-slate-950 font-bold"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {stage.split(". ")[1] || stage} ({done}/{count})
            </button>
          );
        })}
      </div>

      {/* Task List */}
      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`p-3.5 border transition-all cursor-pointer flex items-start gap-3 select-none ${
              item.completed
                ? "bg-slate-950/70 border-emerald-500/30 opacity-75"
                : "bg-slate-950 hover:bg-slate-950/90 border-slate-800 hover:border-cyan-500/50"
            }`}
          >
            <div className="pt-0.5 text-cyan-400">
              {item.completed ? (
                <CheckSquare className="w-5 h-5 text-emerald-400" />
              ) : (
                <Square className="w-5 h-5 text-slate-600 hover:text-cyan-400 transition-colors" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-tech text-slate-500 uppercase">
                  {item.stage}
                </span>
                {item.priority === "high" && (
                  <span className="text-[9px] font-tech px-1.5 py-0.2 bg-red-950 border border-red-500/40 text-red-400">
                    QUAN TRỌNG
                  </span>
                )}
              </div>
              <p className={`text-xs sm:text-sm font-medium ${item.completed ? "line-through text-slate-500" : "text-white"}`}>
                {item.task}
              </p>
              {item.tip && (
                <p className="text-[11px] text-slate-400 mt-1 italic">
                  * Mẹo: {item.tip}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add Custom Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <form
            onSubmit={handleAddTask}
            className="w-full max-w-md bg-slate-950 border border-cyan-500/40 p-5 space-y-4 tech-box shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <h4 className="text-base font-bold font-mecha text-white">Thêm Bước Kiểm Tra Tùy Chỉnh</h4>
            
            <div>
              <label className="text-xs font-tech text-slate-400 block mb-1">Giai đoạn thực hiện:</label>
              <select
                value={newTaskStage}
                onChange={e => setNewTaskStage(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-xs text-white p-2.5 focus:border-cyan-400 focus:outline-none"
              >
                {DEFAULT_CHECKLIST_STAGES.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-tech text-slate-400 block mb-1">Tên công việc / Chi tiết cần kiểm tra:</label>
              <input
                type="text"
                required
                value={newTaskTitle}
                onChange={e => setNewTaskTitle(e.target.value)}
                placeholder="Ví dụ: Khoét lỗ 1.0mm lắp chi tiết kim loại giáp vai..."
                className="w-full bg-slate-900 border border-slate-800 text-xs text-white p-2.5 focus:border-cyan-400 focus:outline-none font-tech"
              />
            </div>

            <div>
              <label className="text-xs font-tech text-slate-400 block mb-1">Ghi chú hoặc mẹo cần nhớ:</label>
              <input
                type="text"
                value={newTaskTip}
                onChange={e => setNewTaskTip(e.target.value)}
                placeholder="Ví dụ: Khoan chậm tay tránh nứt nhựa ABS..."
                className="w-full bg-slate-900 border border-slate-800 text-xs text-white p-2.5 focus:border-cyan-400 focus:outline-none font-tech"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-white border border-slate-800"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold font-tech"
              >
                Lưu Nhiệm Vụ
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
