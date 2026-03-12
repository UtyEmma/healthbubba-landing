<x-filament-panels::page>
    <form wire:submit="save">
        {{ $this->form }}
        
        <x-filament::button class="mt-4" style="margin-top: 20px;" type="submit">
            Save Changes
            <x-filament::loading-indicator wire:loading wire:target="save" class="h-5 w-5" />
        </x-filament::button>
    </form>
</x-filament-panels::page>
