export var TREE_EVENTS = {
    onToggleExpanded: 'onToggleExpanded',
    onActivate: 'onActivate',
    onDeactivate: 'onDeactivate',
    onFocus: 'onFocus',
    onBlur: 'onBlur',
    onInitialized: 'onInitialized',
    onUpdateData: 'onUpdateData',
    onMoveNode: 'onMoveNode',
    onEvent: 'onEvent',
    onLoadChildren: 'onLoadChildren',
    onChangeFilter: 'onChangeFilter',
    toggleExpanded: 'toggleExpanded',
    activate: 'activate',
    deactivate: 'deactivate',
    focus: 'focus',
    blur: 'blur',
    initialized: 'initialized',
    updateData: 'updateData',
    moveNode: 'moveNode',
    event: 'event',
    loadChildren: 'loadChildren',
    changeFilter: 'changeFilterr'
};
export function newName(name) {
    return name[2].toLowerCase() + name.slice(3);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb25zdGFudHMvZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRztJQUN6QixnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsVUFBVSxFQUFFLFlBQVk7SUFDeEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsYUFBYSxFQUFFLGVBQWU7SUFDOUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO0lBRWhDLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsUUFBUSxFQUFFLFVBQVU7SUFDcEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLEtBQUssRUFBRSxPQUFPO0lBQ2QsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGVBQWU7Q0FDOUIsQ0FBQztBQUVGLE1BQU0sa0JBQWtCLElBQUk7SUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUMiLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUUkVFX0VWRU5UUyA9IHtcclxuICBvblRvZ2dsZUV4cGFuZGVkOiAnb25Ub2dnbGVFeHBhbmRlZCcsXHJcbiAgb25BY3RpdmF0ZTogJ29uQWN0aXZhdGUnLFxyXG4gIG9uRGVhY3RpdmF0ZTogJ29uRGVhY3RpdmF0ZScsXHJcbiAgb25Gb2N1czogJ29uRm9jdXMnLFxyXG4gIG9uQmx1cjogJ29uQmx1cicsXHJcbiAgb25Jbml0aWFsaXplZDogJ29uSW5pdGlhbGl6ZWQnLFxyXG4gIG9uVXBkYXRlRGF0YTogJ29uVXBkYXRlRGF0YScsXHJcbiAgb25Nb3ZlTm9kZTogJ29uTW92ZU5vZGUnLFxyXG4gIG9uRXZlbnQ6ICdvbkV2ZW50JyxcclxuICBvbkxvYWRDaGlsZHJlbjogJ29uTG9hZENoaWxkcmVuJyxcclxuICBvbkNoYW5nZUZpbHRlcjogJ29uQ2hhbmdlRmlsdGVyJyxcclxuXHJcbiAgdG9nZ2xlRXhwYW5kZWQ6ICd0b2dnbGVFeHBhbmRlZCcsXHJcbiAgYWN0aXZhdGU6ICdhY3RpdmF0ZScsXHJcbiAgZGVhY3RpdmF0ZTogJ2RlYWN0aXZhdGUnLFxyXG4gIGZvY3VzOiAnZm9jdXMnLFxyXG4gIGJsdXI6ICdibHVyJyxcclxuICBpbml0aWFsaXplZDogJ2luaXRpYWxpemVkJyxcclxuICB1cGRhdGVEYXRhOiAndXBkYXRlRGF0YScsXHJcbiAgbW92ZU5vZGU6ICdtb3ZlTm9kZScsXHJcbiAgZXZlbnQ6ICdldmVudCcsXHJcbiAgbG9hZENoaWxkcmVuOiAnbG9hZENoaWxkcmVuJyxcclxuICBjaGFuZ2VGaWx0ZXI6ICdjaGFuZ2VGaWx0ZXJyJ1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld05hbWUobmFtZSkge1xyXG4gIHJldHVybiBuYW1lWzJdLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDMpO1xyXG59XHJcbiJdfQ==