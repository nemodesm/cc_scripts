--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____GithubRequests = require("common.GithubRequests")
local GithubRequests = ____GithubRequests.GithubRequests
local baseURL = "https://raw.githubusercontent.com/nemodesm/cc_scripts/refs/heads/main/"
local current_progfile = "/current_program"
local key_down = 264
local key_up = 265
local key_enter = 257
local function pick_from(self, items)
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
local function mktemp(self)
    return "tmp." .. tostring(math.random(2147483647))
end
local function downloadFile(self, name, savedAs)
    local save_to = savedAs or name
    if not fs.isDir(fs.getDir(save_to)) then
        fs.makeDir(fs.getDir(save_to))
    elseif fs.exists(save_to) then
        fs.delete(save_to)
    end
    shell.execute("wget", baseURL .. name, save_to)
    return save_to
end
local function downloadDirectory(self, directory, out_dir)
    local actual_out_dir = out_dir or directory
    local response = GithubRequests:getDirectory(directory)
    if response ~= nil then
        for ____, item in ipairs(response) do
            if item.type == "file" then
                downloadFile(nil, (directory .. "/") .. item.name, (actual_out_dir .. "/") .. item.name)
            else
                downloadDirectory(nil, (directory .. "/") .. item.name, (actual_out_dir .. "/") .. item.name)
            end
        end
    end
end
local function downloadModule(self, module_name)
    downloadDirectory(nil, "lua/" .. module_name, module_name)
end
local function tryRunExistingProgram(self)
    if fs.exists(current_progfile) then
        local prog = io.lines(current_progfile)()
        if not fs.exists(prog) or not fs.isDir(prog) then
            fs.delete(current_progfile)
            return false
        else
            shell.setDir(prog)
            for ____, prog in ipairs({"./run", "./run.lua"}) do
                if fs.exists(prog) then
                    shell.execute(prog)
                    return true
                end
            end
        end
    end
    return false
end
local function main(self)
    if not fs.isDir("/tmp") then
        fs.makeDir("/tmp")
    end
    tryRunExistingProgram(nil)
    downloadFile(nil, "scriptlist.txt", "/tmp/list")
    local proglist = {}
    do
        local i = 0
        while i < 20 do
            proglist[#proglist + 1] = tostring(i)
            i = i + 1
        end
    end
    local readline = io.lines("/tmp/list")
    local line = readline()
    while line ~= nil do
        proglist[#proglist + 1] = line
        line = readline()
    end
    pick_from(nil, proglist)
end
main(nil)
return ____exports
