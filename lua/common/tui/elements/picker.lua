--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local key_down = 264
local key_left = 263
local key_right = 262
local key_up = 265
local key_enter = 257
local height = 19
local width = 51
function ____exports.pick_from(self, items)
    if #items > select(
        2,
        term.getSize()
    ) then
        local start_index = 0
        local selected_index = 0
        local function drawFull(self)
            local function write(self, itemIdx, line)
                term.setCursorPos(2, line)
                if itemIdx == selected_index then
                    term.setBackgroundColor(colors.white)
                    term.setTextColor(colors.black)
                else
                    term.setBackgroundColor(colors.black)
                    term.setTextColor(colors.white)
                end
                term.write(items[itemIdx + 1])
            end
            term.clear()
            local i = 1
            if start_index == 0 then
                write(nil, 0, 1)
            else
                term.setCursorPos(2, 1)
                term.write("...")
            end
            do
                while i < select(
                    2,
                    term.getSize()
                ) - 1 do
                    write(nil, i + start_index, i + 1)
                    i = i + 1
                end
            end
            if start_index + select(
                2,
                term.getSize()
            ) == #items then
                write(nil, i + start_index, i + 1)
            else
                term.setBackgroundColor(colors.black)
                term.setTextColor(colors.white)
                term.setCursorPos(2, i + 1)
                term.write("...")
            end
            term.setBackgroundColor(colors.black)
            term.setTextColor(colors.white)
        end
        local running = true
        drawFull(nil)
        while running do
            local _, key = os.pullEvent("key")
            if key == key_down then
                selected_index = selected_index + 1
                if selected_index > start_index + select(
                    2,
                    term.getSize()
                ) - 3 and start_index + select(
                    2,
                    term.getSize()
                ) < #items then
                    start_index = start_index + 1
                end
            elseif key == key_up then
                selected_index = selected_index - 1
                if start_index > selected_index - 2 and start_index > 0 then
                    start_index = start_index - 1
                end
            elseif key == key_enter then
                term.clear()
                term.setCursorPos(1, 1)
                return items[selected_index + 1]
            end
            drawFull(nil)
        end
    end
end
return ____exports
