export function deprecatedSelector(oldSelector, newSelector, element) {
    if (element.nativeElement.tagName && element.nativeElement.tagName.toLowerCase() === oldSelector.toLowerCase()) {
        console.warn("If you are using the capitalized '" + oldSelector + "' selector please move to the \n      kebab-case '" + newSelector + "' selector, as the capitalized will be soon deprecated");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9kZXByZWNhdGVkLXNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sNkJBQTZCLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTztJQUNsRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9HLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXNDLFdBQVcsMERBQzdDLFdBQVcsMkRBQXlELENBQUMsQ0FBQztJQUN6RixDQUFDO0FBQ0gsQ0FBQyIsImZpbGUiOiJkZXByZWNhdGVkLXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGVkU2VsZWN0b3Iob2xkU2VsZWN0b3IsIG5ld1NlbGVjdG9yLCBlbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQubmF0aXZlRWxlbWVudC50YWdOYW1lICYmIGVsZW1lbnQubmF0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG9sZFNlbGVjdG9yLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgIGNvbnNvbGUud2FybihgSWYgeW91IGFyZSB1c2luZyB0aGUgY2FwaXRhbGl6ZWQgXFwnJHtvbGRTZWxlY3Rvcn1cXCcgc2VsZWN0b3IgcGxlYXNlIG1vdmUgdG8gdGhlIFxyXG4gICAgICBrZWJhYi1jYXNlIFxcJyR7bmV3U2VsZWN0b3J9XFwnIHNlbGVjdG9yLCBhcyB0aGUgY2FwaXRhbGl6ZWQgd2lsbCBiZSBzb29uIGRlcHJlY2F0ZWRgKTtcclxuICB9XHJcbn1cclxuIl19