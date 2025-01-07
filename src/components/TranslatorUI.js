export function createTranslatorUI() {
  return `
    <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h1 class="text-3xl font-bold text-center mb-8">YouTube Video Captions</h1>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Enter YouTube Video URL to Get English Captions
              </label>
              <input 
                type="text" 
                id="videoUrl" 
                class="input"
                placeholder="https://www.youtube.com/watch?v=..."
              >
            </div>

            <button id="translateBtn" class="btn w-full">
              Get Captions.....
            </button>

            <div id="result" class="mt-6 hidden">
              <h2 class="text-xl font-semibold mb-4">English Captions</h2>
              <div id="translatedContent" class="bg-gray-50 p-4 rounded-lg space-y-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}