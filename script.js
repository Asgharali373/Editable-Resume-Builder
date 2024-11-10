var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Select the form and resume output elements
var form = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// Variable to store the image data URL
var profileImageDataURL = null;
// Function to handle image upload and convert it to a Data URL
var handleImageUpload = function (file) {
    return new Promise(function (resolve, reject) {
        var maxSizeInBytes = 2 * 1024 * 1024; // 2MB limit
        if (file.size > maxSizeInBytes) {
            reject('Image size should not exceed 2MB.');
            return;
        }
        var reader = new FileReader();
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = function () {
            reject('Error reading image file');
        };
        reader.readAsDataURL(file);
    });
};
// Function to generate resume
var generateResume = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, email, phone, education, experience, skills, imageInput, error_1, resumeHTML, editableElements;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault(); // Prevent form submission
                name = document.getElementById('name').value;
                email = document.getElementById('email').value;
                phone = document.getElementById('phone').value;
                education = document.getElementById('education').value;
                experience = document.getElementById('experience').value;
                skills = document.getElementById('skills').value;
                imageInput = document.getElementById('profileImage');
                if (!(imageInput.files && imageInput.files[0])) return [3 /*break*/, 4];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, handleImageUpload(imageInput.files[0])];
            case 2:
                profileImageDataURL = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                alert(error_1); // Alert the user about the error (e.g., large image)
                profileImageDataURL = null;
                return [3 /*break*/, 4];
            case 4:
                resumeHTML = "\n        <h2>Resume</h2>\n        ".concat(profileImageDataURL ? "<img src=\"".concat(profileImageDataURL, "\" alt=\"Profile Image\">") : '', "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(name, "</span></p>\n        <p><strong>Email:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p class=\"editable\" contenteditable=\"true\">").concat(education.replace(/\n/g, '<br>'), "</p>\n        <h3>Experience</h3>\n        <p class=\"editable\" contenteditable=\"true\">").concat(experience.replace(/\n/g, '<br>'), "</p>\n        <h3>Skills</h3>\n        <p class=\"editable\" contenteditable=\"true\">").concat(skills.replace(/\n/g, '<br>'), "</p>\n    ");
                // Update resume output
                resumeOutput.innerHTML = resumeHTML;
                editableElements = document.querySelectorAll('.editable');
                editableElements.forEach(function (element) {
                    element.addEventListener('blur', function (event) {
                        var target = event.target;
                        target.innerHTML = target.innerText;
                    });
                });
                return [2 /*return*/];
        }
    });
}); };
// Add event listener to form
form.addEventListener('submit', generateResume);
