export function Stats() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="border border-brand-200 rounded-lg p-6">
        <div className="text-sm text-brand-600">Revenue</div>
        <div className="mt-2 text-3xl font-bold">$0</div>
      </div>
      <div className="border border-brand-200 rounded-lg p-6">
        <div className="text-sm text-brand-600">Active subs</div>
        <div className="mt-2 text-3xl font-bold">0</div>
      </div>
      <div className="border border-brand-200 rounded-lg p-6">
        <div className="text-sm text-brand-600">Wait-list</div>
        <div className="mt-2 text-3xl font-bold">0</div>
      </div>
    </div>
  );
}